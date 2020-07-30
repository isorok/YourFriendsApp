const SELECT_ALL_FRIEND_AND_NOT = `SELECT uf.id, uf.to_user_id, status, u.name FROM user_friend AS uf INNER JOIN user u ON u.id = uf.to_user_id WHERE uf.status = 'FRIEND' AND uf.from_user_id = ?
                                    UNION
                                    SELECT uf.id, uf.from_user_id, status, u.name FROM user_friend AS uf INNER JOIN user u ON u.id = uf.from_user_id WHERE uf.status = 'FRIEND' AND uf.to_user_Id = ?
                                    UNION
                                    SELECT uf.id, uf.to_user_id, uf.status, u.name FROM user_friend AS uf INNER JOIN user u ON u.id = uf.to_user_id  WHERE uf.status = 'OUT' AND uf.from_user_id = ?  
                                    UNION 
                                    SELECT uf.id, uf.from_user_id, "IN" as status, u.name FROM user_friend AS uf INNER JOIN user u ON u.id = uf.from_user_id  WHERE uf.status = 'OUT' AND uf.to_user_Id = ?
                                    UNION
                                    SELECT uf.id, uf.to_user_id, uf.status, u.name FROM user_friend AS uf INNER JOIN user u ON u.id = uf.to_user_id  WHERE uf.status = 'IN' AND uf.from_user_id = ?  
                                    UNION 
                                    SELECT uf.id, uf.from_user_id, "OUT" as status, u.name FROM user_friend AS uf INNER JOIN user u ON u.id = uf.from_user_id  WHERE uf.status = 'IN' AND uf.to_user_Id = ?;`
const SELECT_USER_BY_ID = `SELECT * FROM user WHERE id = ?;`
const SELECT_All_USERS_EXCEPT_PRINCIPAL = `SELECT * FROM user WHERE id != ?;`
const SELECT_CURRENT_USER = `SELECT * FROM user WHERE email = #email# AND password = #password# LIMIT 1;`
const DUMMY_USERS = [
{
id: "1",
name: "Ihor Sorokin",
email: 'ihor@gmail.com',
password: 'root',
image:
"https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
status: "outgoing",
},
{
id: "2",
name: "Marko Vovchok",
image:
"https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
status: "incoming",
},
{
id: "3",
name: "Vova Fedyshyn",
image:
"https://ichef.bbci.co.uk/news/936/cpsprodpb/4FA0/production/_108848302_a0d15811-30d8-4a51-8dd3-ab45f3dbc387.jpg",
status: "friend",
}
];

const getUsersDUMMY = (req, res, next) => {
    console.log('GET Request in users');

    const users = DUMMY_USERS; 
    
    res.json(users);
};

const getUsers = (req, res, next) => {

    // req.getConnection((err, conn) => {
    //     conn.query('SELECT * FROM user', (err, users) => {
    //         res.json(users);
    //     });
    // });
    const id = req.params.id;
    console.log('I need bro with id = ', id)

    

    req.getConnection((err, conn) => {
        
        const concatString = SELECT_All_USERS_EXCEPT_PRINCIPAL + SELECT_ALL_FRIEND_AND_NOT;
        console.log(concatString);
        conn.query(concatString, [id, id,id,id,id,id,id], (error, results, fields) => {
            let users = results[0];   
            let usersWithStatus = results[1]; 

            let obj = {};

            let friendsIds = usersWithStatus.filter(el => el.status === 'FRIEND');
            console.log("ALL FRIENDS : " + friendsIds)
            for (let index = 0; index < friendsIds.length; index++) {
                let friend =  friendsIds[index];
                console.log(friend.id);
                let name  = friend.to_user_id;
                obj[name] = friend;
                
            }

            for (let index = 0; index < users.length; index++) {
                const element = users[index];
                
                if(obj[element.id]){
                    console.log('element.id = ' + element.id)
                    let friend = obj[element.id];
                    element.status = friend;
                }
            }

            // outgoing
            let objOut = {};
            let outIds = usersWithStatus.filter(el => el.status === 'OUT')

            for (let index = 0; index < outIds.length; index++) {
                let friend =  outIds[index];
                console.log(friend.id);
                let name  = friend.to_user_id;
                objOut[name] = friend;
                
            }

            for (let index = 0; index < users.length; index++) {
                const element = users[index];
                
                if(objOut[element.id]){
                    console.log('element.id = ' + element.id)
                    let friend = objOut[element.id];
                    element.status = friend;
                }
            }

            // incoming
            let objIn = {};
            let inIds = usersWithStatus.filter(el => el.status === 'IN')

            for (let index = 0; index < inIds.length; index++) {
                let friend =  inIds[index];
                console.log(friend.id);
                let name  = friend.to_user_id;
                objIn[name] = friend;
                
            }

            for (let index = 0; index < users.length; index++) {
                const element = users[index];
                
                if(objIn[element.id]){
                    console.log('element.id = ' + element.id)
                    let friend = objIn[element.id];
                    element.status = friend;
                }
            }

            //res.json({users:usersWithStatus});


// console.log(usersWithStatus);
        // const friendsIds = usersWithStatus.filter(el => el.status === 'FRIEND').map(el => el.to_user_id);
        // const outIds = usersWithStatus.filter(el => el.status === 'OUT').map(el => el.id);

        // users = users.filter(u => friensIds.indexOf(u.id) !== -1 ).map(u => u.status = 'SUPER_FRIEND');
        // users = users.filter(u => friensIds.outIds(u.id) !== -1 ).map(u => u.status = 'OUTGOING_REQUEST');

            res.json(users);
        });
        
    });

}


const createUser = (req,res,next) => {
    const { id, name, image, status} = req.body;
    const addFriend = {
        id,
        name,
        image,
        status
    };
    DUMMY_USERS.push(addFriend);
 
    res.status(201).json({user:addFriend});
 }

 const updateUserById = (req,res,next) => {
    const {id, status} = req.body;

    const updatedUser = {...DUMMY_USERS.find(u => u.id === id)};
    const userIndex = DUMMY_USERS.findIndex(u=> u.id === id)

    updatedUser.status = status;

    DUMMY_USERS[userIndex] = updatedUser;

    res.status(200).json({updatedUser});

 }

 const login = (req,res,next) => {
     const { email, password} = req.body;

     const identifiedUser = DUMMY_USERS.find(u => u.email === email)
     if(identifiedUser.password !== password){
        res.json({message:'Wrong credentials!!!'})
     }
     res.json({message:'LoggedIn!!!'})
 }

 const loginUser = (req, res, next) => { 
    console.log('login Request');
    const obj = req.body;
    req.getConnection((err, conn) => {
        conn.query(SELECT_CURRENT_USER, [obj.email, obj.password],  (error, results, status) => {res.json({status:status});})
    });

};

 exports.getUsersDUMMY = getUsersDUMMY;
 exports.createUser = createUser;
 exports.getUsers = getUsers;
 exports.updateUserById = updateUserById;
 exports.login = login;
 exports.loginUser = loginUser;