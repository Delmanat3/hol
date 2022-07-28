// Query partial: retrieve all menus.
const allMenus = `
  menus {
    nodes {
      locations
      menuItems(first: 100) {
        nodes {
          id
          parentId
          label
          path
          target
          title
        }
      }
    }
  }
  headlessConfig {
    optionsSocialMedia {
      facebook
      phoneNumber
      followText
      google
      instagram
      address
      operatingHours
   
    }
  }
`

export default allMenus
