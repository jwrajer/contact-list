const SingleContactRow = ({ contact }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.username}</td>
      <td>{contact.website}</td>
    </tr>
  )
}

export default SingleContactRow