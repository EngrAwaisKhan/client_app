import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
      id
      name
      email
      age
    }
  }
`;

const Students = () => {
    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading)
        return <h1>Loading...</h1>
    if (error)
        return <h1>Error</h1>

    const { students } = data;
    return (
        <div className='std_div'>
            <h2>Students List</h2>
            <table border='2' className='tbl_div'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(std => {
                        return (
                            <tr key={std.id}>
                                <td>{std.id}</td>
                                <td>{std.name}</td>
                                <td>{std.email}</td>
                                <td>{std.age}</td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default Students