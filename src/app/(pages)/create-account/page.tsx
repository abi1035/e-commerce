import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <section className={classes.createAccount}>
      <div className={classes.heroImg}>
        <Link href="/">
        <Image 
        src="/logo-black.svg"
        alt='logo'
        height={23}
        width={250}
        className={classes.logo}/>
        </Link>
      </div>

      <div className={classes.formWrapper}>
          <div className={classes.fromContainer}>
            <RenderParams className={classes.params}/>
            <div className={classes.formTitle}>
              <h3>Create Account</h3>
            {/* <Image src='/assets/icons/hand.png' alt='hand' height={30} width={30}/> */}

            </div>
            <p>Please Enter your details</p>
            <CreateAccountForm/>


          </div>

        </div>


    </section>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
