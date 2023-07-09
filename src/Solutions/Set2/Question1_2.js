import {useState} from 'react'
export const data = [
    {
      id: 1,
      mail: "tanay@neog.camp"
    },
    {
      id: 2,
      mail: "tanvi@neog.camp"
    },
    {
      id: 3,
      mail: "akanksha@neog.camp"
    },
    {
      id: 4,
      mail: "parul@neog.camp"
    },
    {
      id: 5,
      mail: "kishan@neog.camp"
    }
  ];
function Question1_2() {
    const [email ,setEmail] = useState("")
    const [showMsg , setShowMsg] = useState("")
    const [userData , setUserData] = useState(data)
    const submitHandler= (e) => {
        e.preventDefault()
        if(data.some(el => el.mail.toLowerCase() === email.toLowerCase()))
            setShowMsg("Email already exists")
        else{
            setUserData(userData => [...userData , {mail : email}])
            setShowMsg("you are now subscribed")

        }
    }
    console.log(userData)
  return (
      <>
    <form onSubmit={submitHandler}>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"/>
        <button>Submit</button>
    </form>
    <div>{showMsg}</div>
    </>
  )
}

export  {Question1_2}