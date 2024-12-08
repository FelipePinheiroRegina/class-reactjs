## Performance on react

### Let's about the lib use context selector

Let's start with lib `npm i use-context-selector scheduler`

1. what does it do?
    - The main idea behind the use-context-selector library is to provide more granular control over re-renders in React when using context. It allows you to select specific parts of a context's value, ensuring that only components relying on the changed parts re-render. This prevents unnecessary re-renders of components that do not use the modified values.
2. what is the syntax
    - within the context, now you will use createContext from within the use-context-selector, the way of writing the context will not change at all

just follow this syntax:

fileContext.tsx

```typescript
import { createContext } from 'use-context-selector'

interface PropsContext {
  name: string,
  age: number
}

const TransactionsProvider = createContext({} as PropsContext)

// and other codes...
```

Now to use context functions you must follow this syntax

any component.tsx
```typescript
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from 'fileContext'

const createTransaction = useContextSelector(TransactionsContext, (context) => {
  return context.createTransaction
})
```

### Now, let's talk about how to use react's useCallback

1. What does it do?
    - The useCallback hook prevents a function from being recreated on every render, as long as none of the dependencies specified in the dependency array have changed. This is useful for optimizing performance in scenarios where the function is passed as a prop to child components or used in effects.
2. what is the syntax
    - Let's get function createTransaction as reference

transactionsContext.tsx
```tsx
import { useCallback } from 'react'

const createTransaction = useCallback(
  async (data: ValuesOfInputsTransaction) => {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })

    setTransactions((state) => [response.data, ...state])

  }, [dependencies])
```

### Now, let's talk about how to use react's memo

1. why does a component render?
    - hooks change (props, context, reducers)
    - props changed
    - parent rerendered

2. What is the rendering flow?
    - react recreates the html of that component's interface
    - compares the version of the recreated html with the previous html
    - if anything changed, it rewrites the html on the screen

In cases where recreating a large HTML structure is too expensive for React, it's recommended to use React.memo to optimize rendering. When you use memo on a component, React adds an "extra step" before continuing with the normal rendering flow.

What happens with React.memo?
React checks if there were any changes in the props of the component by comparing the previous values with the new ones. This comparison is shallow by default, meaning it only checks if the references of the props have changed, without performing a deep comparison (unless you provide a custom comparison function).

If nothing has changed in the props, React skips the entire process of rebuilding the Virtual DOM and reuses the previous result, avoiding the rendering work altogether.

If there were changes, React allows the component to proceed with the normal rendering flow: rebuilding the Virtual DOM, comparing it to the previous version, and updating the real DOM (if necessary)

Benefits of React.memo
It is particularly useful for components that receive many props or have complex rendering logic, as it reduces unnecessary re-renders, saving time and resources.


```tsx
import { memo } from 'react'

function Component() {
  return (
    // codes components
  )
}

export const ComponentMemo = memo(Component)
```


### Now, let's talk about how to use react's useMemo

1. What does it do? 
    - The useMemo hook allows you to memoize the value of a computed variable. It only recalculates this value when one of the dependencies specified in the dependency array changes. If none of the dependencies change, it reuses the previously computed value and does not recreate the variable in memory.

    - This is useful for optimizing expensive calculations or operations that don’t need to run on every render, ensuring resources are used efficiently.
2. what is the syntax
    - Let's get page summary as reference

```tsx
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'
import { SummaryContainer, Card } from './styles'
import { formatMoney } from '../../formattingFunctions/formatMoney'
import { useContextTransactions } from '../../hooks/useContextTransactions'
import { useMemo } from 'react'

export function Summary() {
    const transactions = useContextTransactions()

    // see, it will allow the recalculation of this variable only if the transactions state changes
    const accumulator = useMemo(() => {
        return transactions.reduce((accumulator, transaction) => {
            if(transaction.type === 'income') {
                accumulator.income += transaction.price
                accumulator.total += transaction.price
            } else {
                accumulator.outcome += transaction.price
                accumulator.total -= transaction.price
            }
    
            return accumulator
        }, {income: 0, outcome: 0, total: 0})
    }, [transactions])

    return (
        <SummaryContainer>
            <div className="centralize">
                <Card $colorIcon='green'>
                    <div>
                        <span className='title'>Income</span>
                        <span><ArrowCircleUp/></span>
                    </div>
                    <strong className='value'>{formatMoney(accumulator.income)}</strong>
                </Card>
                <Card $colorIcon='red'>
                    <div>
                        <span className='title'>Outcome</span>
                        <span><ArrowCircleDown/></span>
                    </div>
                    <strong className='value'>{formatMoney(accumulator.outcome)}</strong>
                </Card>
                <Card $colorIcon='white' $variant='filled'>
                    <div>
                        <span className='title'>Total</span>
                        <span><CurrencyDollar/></span>
                    </div>
                    <strong className='value'>{formatMoney(accumulator.total)}</strong>
                </Card>
            </div>
        </SummaryContainer>
    )
}
```