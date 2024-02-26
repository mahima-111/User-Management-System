const User=require('../models/User');
const getResult=async (req,res)=>{
    try{
        const searchQuery=req.query.search || '';
        // const {genderQuery,statusQuery,sortQuery}=req.query;
        let genderMatch;
        let statusMatch;
        let sortCriteria;
        const genderQuery=req.query.gender;
        const statusQuery=req.query.status;
        const sortQuery=req.query.sort;
        if (genderQuery==='all'){
            // genderQuery='';
            genderMatch={};
        }
        else{
            genderMatch={gender: genderQuery};
        }

        if (statusQuery==='all'){
            statusMatch={};
        }
        else{
            statusMatch={status: statusQuery};
        }

        if(sortQuery==='ageAsc'){
            sortCriteria={age:1}
        }
        else if(sortQuery==='ageDesc'){
            sortCriteria={age:-1}
        }
        else if(sortQuery==='nameAsc'){
            sortCriteria={fname:1}
        }
        else if(sortQuery==='nameDesc'){
            sortCriteria={fname:-1}
        }
        let resultList;

        if(sortQuery==='default'){
            resultList=await User.aggregate([
                {
                    $match:{
                        $and:[
                            { fname: { $regex: searchQuery, $options: 'i' } },
                            genderMatch,
                            statusMatch
                        ]
                    }
                }
            ]);
        }
        else{
            resultList=await User.aggregate([
                {
                    $match:{
                        $and:[
                            { fname: { $regex: searchQuery, $options: 'i' } },
                            genderMatch,
                            statusMatch
                        ]
                    }
                },
                {$sort:
                    sortCriteria
                }
            ]);
        }
        
        res.json(resultList);
    }
    catch(err){
        res.json({message: `${err}`});
    }
}
module.exports=getResult;