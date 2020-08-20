const app = require('./app');
const PORT = 5555;

const database = require('./database');
database.connect(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on PORT: ${PORT}`);   
        });
        
    } catch (error) {
        console.log(error);
    }
})




