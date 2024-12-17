import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

const signInForm = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
    resolver: zodResolver(signInForm)
  })
  
  async function handleSignIn(data: SignInForm) {
    console.log(data)
    toast.success('We have sent an authentication link to your email!', {
      action: {
        label: 'resend',
        onClick: () => {} 
      }
    })
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <>
      <Helmet title="Login"/>
      <div className='p-8'>
        <Button variant='ghost' asChild className='absolute right-8 top-8'>
          <Link to='/signup'>
              New establishment
          </Link>
        </Button>

        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>Access Panel</h1>
              <p>track your sales through the partner panel</p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className='flex flex-col gap-4'>
            <div className='space-y-2'>
                <Label htmlFor='email'>Your e-mail</Label>
                <Input id='email' type='email' {...register('email')}/>
            </div>

            <Button disabled={isSubmitting} type='submit'>
              Access Panel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
