import * as React from 'react';
import {Modal} from './Modal'
import {Typography} from './Typography'
import {Input} from './Input'
import {Button} from './Button'
import {ButtonLink} from './ButtonLink'
import {Avatar} from './Avatar'
export interface Props {}

export const SigninModal: React.SFC<Props> = (props) => {


    
        return (
            <Modal show={true} onHide={() => console.log('On hide')} size={'large'}>

<div className="signin_header">
  <div className="brand-exim-short"></div>
  <Typography useFor="content">Guardian Wallet Demo</Typography>
</div>

<div className="signup_modal">

  <div className="signup_modal_left">

    <Typography h5> Vault-Okta Auth</Typography>
    <div className="input-group">
      <Input type='text' placeholder='email'></Input>
    </div>

    <div className="input-group">
      <Input type='password' placeholder='password'></Input>
    </div>

    <div className="input-group">
      <Typography useFor="caption">*you must have an okta user in our organization. <a href="eximchain.okta.com">Learn more</a></Typography>
    </div>

    <div className="input-group-btn-left">
      <ButtonLink link>Github</ButtonLink>
    </div>

    <div className="input-group-btn-right">
      <Button primary>Next</Button>
    </div>

  </div>

  <div className="signup_modal_right">
    <Avatar src={"members"} />
    <Typography useFor="contentSmall">A secure, collaborative blockchain governance mechanism</Typography>
  </div>

</div>

<ul className="terms_ul">
  <li><a href="#">English <i className="fa fa-caret-down"></i></a></li>
  <li><a href="#">Privacy</a></li>
  <li><a href="#">Terms</a></li>
</ul>
</Modal>
        )
    }

