interface PrivateProps {
  onLogout: () => void;
}
function Private({onLogout}: PrivateProps) {
  
  return (
    <div className="content-space">
      <h1>Bem vindo!</h1>
      <button onClick={onLogout}>Deslogar</button>
    </div>
  )
}

export default Private;
