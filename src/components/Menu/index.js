'use client'
export default function Menu() {
  function clicked() {
    alert('clicado')
  }
  return <h1 onClick={clicked}>Menu</h1>
}
