

export default function Footer(){
  let currentYear = new Date.now().getYear()
  return (
    <footer>
      <p> Copyright © {currentYear} </p>
    </footer>
  )
}