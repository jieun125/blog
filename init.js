import app from "./app";

const PORT = 5000;

const handleListening = () =>
    console.log(`${PORT}에 접속했습니다.`);

app.listen(PORT, handleListening);