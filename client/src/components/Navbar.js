import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"

export default () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item
          name='Home'
        >
          Home
        </Menu.Item>
      </Link>
      <Link to="/api/departments">
        <Menu.Item
          name='departments'
        >
          See all Departments
        </Menu.Item>
      </Link>
    </Menu>
  )
}