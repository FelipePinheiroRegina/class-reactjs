import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Link, useSearchParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/signin'

const signInForm = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [ searchParams ] = useSearchParams()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  })
  
  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      toast.success('We have sent an authentication link to your email!', {
        action: {
          label: 'resend',
          onClick: () => {} 
        }
      })

    } catch {
      toast.error('Credentials does not match')
    }
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
