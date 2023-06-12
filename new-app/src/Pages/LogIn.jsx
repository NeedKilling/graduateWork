import React, {  useState } from 'react'
import { Link ,Navigate,useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { AuthContext } from '../hoc/AuthProvider';


function LogIn() {
    const navigate = useNavigate();
    const location = useLocation()
    const [icon,setIcon] = React.useState(true)

    const {user,setUser} = React.useContext(AuthContext)
    const [error,setError] = React.useState(false)

    const logInUser =(e)=>{
        e.preventDefault()
        let newUser = {
            email: e.target[0].value,
            password: e.target[1].value,
        }

        axios.post('http://localhost:3001/login',newUser)
    
        .then(({data})=>{
          setUser({
            token: data.accessToken,
            ...data.user
          })
    
          localStorage.setItem('user',JSON.stringify({
              token: data.accessToken,
              ...data.user
          }))
          navigate("/")                          /////////// сохранение юзера в локальное хранилище
        })
        .catch((err)=>{
          if(err.response.status === 400){
            setError(true)
          }else{
            setError(false)
          }
        })
          
        
        
        

    }      
    
  const useValidation = (value,validate) =>{

    const [isEmpty,setIsEmpty] = React.useState(true)
    const [minLength,setMinLength] = React.useState(false)
    const [EmailError,setEmailError] = React.useState(false)
    const [InputValid,setInputValid] = React.useState(false)

  React.useEffect(()=>{
    for (const validation in validate) {
      switch(validation){
        case "minLength":
                value.length < validate[validation] ? setMinLength(true) : setMinLength(false)
            break;
        case "isEmpty":
                value ? setIsEmpty(false) : setIsEmpty(true)
            break;
        case "isEmail":
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
            break;
      } 
    }
  },[value])

  React.useEffect(()=>{ 
    if(isEmpty || minLength || EmailError){
      setInputValid(false)
    }else{
      setInputValid(true)
    }
  },[isEmpty,minLength,EmailError])

  return{
    isEmpty,
    minLength,
    EmailError,
    InputValid
  }

}


//////////////////CUSTOM HOOK VALIDATION//////////////////////////
const useInput = (initialValue,validate) => {                    
  const [value,setValue] = React.useState(initialValue)
  const [inputFalse,setInputFalse] = React.useState(false)
  const valid = useValidation(value,validate)
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) =>{
    setInputFalse(true)
  }

  return {
    value,
    onChange,
    onBlur,
    inputFalse,
    ...valid
  }
}


const EMAIL = useInput('',{isEmpty: true, minLength: 3,isEmail : true})
const PASSWORD = useInput('',{isEmpty: true, minLength: 8})
      

  return (
    <div className='register'>
        <div className='container'>
            <div className="register_block">
                <div className='title'>Вход</div> 
                    <form onSubmit = {logInUser} className="register_form" action="">
                            <div className='passwordForm'>
                                  {error && <div style={{color: "red"}}>Неверный email либо пароль</div>}
                                  {(EMAIL.inputFalse && EMAIL.isEmpty) && <div style={{color: "red"}}>Поле не может быть пустым</div>}
                                  {(EMAIL.inputFalse && EMAIL.EmailError) && <div style={{color: "red"}}>Неккоректный email</div>}
                                <input   value = {EMAIL.value} onBlur = {(e)=>EMAIL.onBlur(e)} onChange={(e)=>EMAIL.onChange(e)} type="text" name="email" placeholder="email@email.com" />
                            </div>
                            <div className='passwordForm'> 
                                {(PASSWORD.inputFalse && PASSWORD.isEmpty) && <div style={{color: "red"}}>Поле не может быть пустым</div>}
                                {(PASSWORD.inputFalse && PASSWORD.minLength) && <div style={{color: "red"}}>Пароль не менее 8-ми символов</div>}
                              <input  value = {PASSWORD.value} onBlur = {(e)=>PASSWORD.onBlur(e)} onChange={(e)=>PASSWORD.onChange(e)} type={icon ? "password" : "text"}name="password" placeholder="password" />
                              <span className='icon' onClick = {()=>setIcon(!icon)}>
                                  {
                                  icon ? <AiFillEye/> : <AiFillEyeInvisible/>
                                  }
                              </span>
                            </div>
                            <Link to="/Register"> <div className='register_block_link'>Создать аккаунт</div> </Link>
                            <button disabled = {!EMAIL.InputValid || !PASSWORD.InputValid} className = "register_block_btn" type="submit" >Войти</button>
                    </form>
                
                
            </div>
        </div>
    </div>
  )
}

export default LogIn