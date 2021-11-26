const app = require('./config/express')();
const port = app.get('port');


module.exports = () => {
    const app = express();
    
  
    
    require('../api/routes/user.js')(app);
    
    
    return app;
};

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});