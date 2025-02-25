import SideBar from "../../bars/SideBar";

export default function TableBody({ lable, columns, data }) {
    const trList = new Array(10).fill(null).map(e => 'tr');

    return (
        <tbody>
            {trList.map((tr, index) => (
                <tr key={index}>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td className='td-edit'><SideBar /></td>
                </tr>
            ))}

            {/*data.map((row) => (
                <tr key={row.id}>
                    {columns[lable].map((col, index) => (
                        <td key={index + 'keystab'}>{row[col]}</td>
                    ))}

                    <td className='td-edit'></td>
                </tr>
            ))*/}
        </tbody>
    )
}
