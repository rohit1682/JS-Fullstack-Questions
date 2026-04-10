import 'dotenv';
import app from './src/app';

const port = Process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server Running on PORT: ", post);
})