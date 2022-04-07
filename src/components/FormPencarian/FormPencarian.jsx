import { Input, Button, Label } from "reactstrap";
import './FormPencarian.css'

  function FormPencarian() {
    return (
      <div className="container-search d-flex">
      <div className="label">
      <Label for="exampleDriver" className="text-dark">
        Tipe Driver
        </Label>
      <Label for="exampleDriver" className="text-dark">
        Tipe Driver
        </Label>
      <Label for="exampleDriver" className="text-dark">
        Tipe Driver
        </Label>
      <Label for="exampleDriver" className="text-dark">
        Tipe Driver
        </Label>
      <div className="input">
        <Input id= "exampleDriver" bsSize="lg" type="select" className="input">
        <option>
        Dengan Sopir
        </option>
        <option>
        Tanpa Sopir
        </option>

        </Input>
        <Input bsSize="lg" type="date" placeholder="Pilih Tanggal" className="input"/>
        <Input id="exampleTime" name="time" placeholder="Pilih Waktu " type="time" bsSize="lg"
        className="input"
        />
        <Input id="exampleNumber" name="number" placeholder="Jumlah Penumpang"type="number" bsSize="lg"
        className="input"
        />
        <Button color="success"className="input" size="sm" >
          Cari       Mobil
        </Button>
        </div>
      </div>
      </div>

    );
  }

  export default FormPencarian;