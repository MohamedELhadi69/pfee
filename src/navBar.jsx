export default function landing(){
    return(
        <>
      <div className="forum">
        <label htmlFor="user">User</label>
        <input type="text" id="user" placeholder="user" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="password" />
        <button>Log in</button>
        
      </div>
        </>
    )

}