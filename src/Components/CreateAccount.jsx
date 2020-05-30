import React from 'react'
import { auth } from "../Backend/firebase";


const CreateAccount = () => {

    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [rut, setRut] = React.useState("");
    const [prevision, setPrevision] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(null);
    const [register, setRegister] = React.useState(true)

    const processingData = (e) =>{ 
        e.preventDefault();
      
        if (!name.trim()) {
          console.log("Ingrese Nombre");
          setError("Ingrese Nombre");
          return;
        }
        if (!email.trim()) {
          console.log("Ingrese Email");
          setError("Ingrese Email");
          return;
        }
        if (!password.trim()) {
          setError("Ingrese Password");
          return;
        }
        if (password.length < 6) {
          setError("EL password debe ser de 6 caracteres");
          return;
        }
        console.log('correcto')
        setError(null)

        if(register){
            registerAccount()
          }
      
      }
      const registerAccount = React.useCallback(async() =>{
        try {
          const res = await auth.createUserWithEmailAndPassword( email, password)
        
          console.log(res.user)
          
        } catch (error) {
          console.log(error)
          if(error.code === 'auth/invalid-email'){
            setError('Email no valido')
          }
      
          if(error.code === 'auth/email-already-in-use'){
            setError('Email ya utilizado')
          }
             
        }
      }, [email, password])

    return (
        <div>
            <h3>{register ? "Registro de usuarios" : "Login de accseso"}</h3>
            <form onSubmit={processingData}>

            {
          error && (
            <div>
              {error}
            </div>
          )
        }
    
          <input
            type="text"
            placeholder="Juan Pérez Pérez"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
       
          <input 
          type="num" 
          placeholder="12.345.678-9" 
          value={rut}
          onChange={e => setRut(e.target.value)}
          />
        
          <select onChange={e => setPrevision( e.target.value)}>
            <option value="select"></option>
            <option value="fonasa">Fonasa</option>
            <option value="isapre">Isapre</option>
          </select>
      
          <input 
          type="num" 
          placeholder="+56"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          />
      
          <input
            type="email"
            placeholder="juanperezprez@gmail.com"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
      
          <input
            type="password"
            placeholder="******"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
      
          <button 
          type="submit"
          > 
          {register ? "Registrarse" : "Acceder"}    
          </button>

        <button 
        type="button"
        onClick={() => setRegister(!register)} > 
        </button>
      </form>
        </div>
    )
}

export default CreateAccount
