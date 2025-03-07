import Select from "../../Select";
import Input from "../../Input";

export default function AddCabinetBody() {

    return (
        <>
            <Select name="site" />
            <Select name="location" />
            <Input name='cabinet' />

        </>
    );
}
