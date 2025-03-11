import Select from "../../Select";
import Input from "../../Input";

export default function AddLocationBody() {
    return (
        <>
            <Select name="site" />
            <Input name='location' action='add' />
        </>
    );
}
