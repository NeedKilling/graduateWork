import axios from 'axios'
import React, { useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import { AuthContext } from '../hoc/AuthProvider'

function Register() {

  const navigate = useNavigate();

  const [state,setState] = React.useState(true)
  const switchState = () => {
    setState(!state)
  }

  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [userName,setUserName] = React.useState('')
  const [icon,setIcon] = React.useState(true)
  

  const {user,setUser} = React.useContext(AuthContext)          ////////// контекст

  const useValidation = (value,validate) =>{

    const [isEmpty,setIsEmpty] = React.useState(true)
    const [minLength,setMinLength] = React.useState(false)
    const [EmailError,setEmailError] = React.useState(false)
    const [InputValid,setInputValid] = React.useState(false)

  useEffect(()=>{
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

  useEffect(()=>{ 
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
let emailValue = EMAIL.value
let passwordValue = PASSWORD.value


  function registerUser(e){
    e.preventDefault();

    let newUser = {
      email,
      password,
      userName
    }
    axios.post('http://localhost:3001/register',newUser)

    .then(({data})=>{
      setUser({
        token: data.accessToken,
        ...data.user
      })

      localStorage.setItem('user',JSON.stringify({
          token: data.accessToken,
          ...data.user
      }))     
                                  /////////// сохранение юзера в локальное хранилище
    })
    .catch((err)=>console.log(err.message))
    if(user.email){
      navigate("/LogIn") 
    }  
    

    console.log({email,password,userName})
  } 

///////////FUNCTION FOR VALIDATION//////////////////////


  
  
  return (

    
    
  <div className='register'>
        <div className='container'>
            <div className="register_block">
              <div className='title'>Регистрация</div> 
                <form onSubmit = {registerUser} className="register_form" action="">
                    {
                      state && 
                      <>
                       <input  value={userName} onChange={(e)=>setUserName(e.target.value)} type = "text" name="username" placeholder="username" />
                      <div className='passwordForm'>
                     
                                {(EMAIL.inputFalse && EMAIL.isEmpty) && <div style={{color: "red"}}>Поле не может быть пустым</div>}
                                {(EMAIL.inputFalse && EMAIL.EmailError) && <div style={{color: "red"}}>Неккоректный email</div>}
                             

                        <input value = {email} 
                        // onBlur = {(e)=>EMAIL.onBlur(e)} 
                        // onChange={(e)=>EMAIL.onChange(e)} 
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text" name="email" placeholder="email@gmail.com" />
                      </div>
                        <div className='passwordForm'>

                                {(PASSWORD.inputFalse && PASSWORD.isEmpty) && <div style={{color: "red"}}>Поле не может быть пустым</div>}
                                {(PASSWORD.inputFalse && PASSWORD.minLength) && <div style={{color: "red"}}>Пароль не менее 8-ми символов</div>}

                          <input value = {password} 
                          // onBlur = {(e)=>PASSWORD.onBlur(e)} 
                          // onChange={(e)=>PASSWORD.onChange(e)} 
                          onChange={(e)=>setPassword(e.target.value)}
                          type={icon ? "password" : "text"}name="password" placeholder="password" />
                          <span className='icon' onClick = {()=>setIcon(!icon)}>
                            {
                              icon ? <AiFillEye/> : <AiFillEyeInvisible/>
                            }
                          </span>
                        </div>
                        <Link to="/LogIn"> <div className='register_block_link'>У меня есть аккаунт</div> </Link>
                        <button  className = "register_block_btn" type="submit" >Создать аккаунт</button>
                      </>
                    } 
                </form>
            </div>
        </div>
    </div>
          
          
        
  )
}

export default Register