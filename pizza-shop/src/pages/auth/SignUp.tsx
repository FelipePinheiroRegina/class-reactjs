import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm)
  })
  
  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurant successfully registered!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/')
        }
      })

    } catch {
      toast.error('Error registering restaurant')
    }
  }

  return (
    <>
      <Helmet title="Register"/>
      <div className='p-8'>
        <Button variant='ghost' asChild className='absolute right-8 top-8'>
          <Link to='/' className=''>
              Login
          </Link>
        </Button>

        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>Create account free</h1>
              <p>Become a partner and start your sales</p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className='flex flex-col gap-4'>
            <div className='space-y-2'>
                <Label htmlFor='restaurantName'>Name of the establishment</Label>
                <Input id='restaurantName' type='text' {...register('restaurantName')}/>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='managerName'>Your name</Label>
                <Input id='managerName' type='text' {...register('managerName')}/>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='phone'>Your phone</Label>
                <Input id='phone' type='tel' {...register('phone')}/>
            </div>

            <div className='space-y-2'>
                <Label htmlFor='email'>Your e-mail</Label>
                <Input id='email' type='email' {...register('email')}/>
            </div>

            <Button disabled={isSubmitting} type='submit'>
              Finalize registration
            </Button>

            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
              By continuing you agree to our 
              <a className='underline underline-offset-4' href="#"> Terms of Service </a> 
              and 
              <a className='underline underline-offset-4' href="#"> Privacy Policy. </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
