//importamos axios pues aquí estará nuestra instancia de axios
import axios from "axios";

//exportamos como constante para mantener el nombre lo desestructuramos del otro lado como un objeto.

//El método axios.create() nos solicita como parámetro un objeto de configuración y retorna
//una AxiosInstance. Este es nuestro Singleton...

export const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
