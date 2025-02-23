export default function TableBody({ lable, columns, data }) {
    return (
        <tbody>
            <tr><td>{lable} table body</td></tr>
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
