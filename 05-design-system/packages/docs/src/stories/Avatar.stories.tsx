import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

/**
 * ## Componente Avatar
 *
 * O componente `Avatar` é utilizado para exibir a imagem de um usuário, com suporte a fallback quando a imagem não está disponível.
 *
 * ### Comportamento
 * - Exibe a imagem do usuário com a URL fornecida através da prop `src`.
 * - Caso a imagem não carregue, exibe um ícone de usuário genérico após 600ms (delay configurado no `AvatarFallback`).
 *
 * ### Props
 * - **`src`** *(string)*: URL da imagem do avatar. Se não fornecida ou se houver erro no carregamento, o componente exibe o fallback.
 * - **`alt`** *(string)*: Texto alternativo para a imagem, importante para acessibilidade.
 * - **Outras props**: O componente aceita todas as propriedades nativas de um elemento `img`.
 *
 * ### Exemplo de Uso
 * ```tsx
 * <Avatar src="https://github.com/FelipePinheiroRegina.png" alt="Felipe Pinheiro" />
 * ```
 */
const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/FelipePinheiroRegina.png',
    alt: 'Felipe Pinheiro',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Componente utilizado para exibir o avatar do usuário, com suporte a fallback e estilização customizada.',
      },
    },
  },
}

export default meta

type Story = StoryObj<AvatarProps>

/**
 * Avatar com uma imagem carregada corretamente.
 */
export const Primary: Story = {}

/**
 * Avatar com fallback ativado, exibindo o ícone de usuário quando a imagem não é fornecida.
 */
export const WithFallBack: Story = {
  args: {
    src: undefined,
  },
}
