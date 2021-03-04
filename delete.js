// delete document
const deletedoc = async (_id)=>{
    try{
    const result = await testing.deleteOne({_id})
    console.log(result)
    }
    catch(err){
        console.log(err)
    }
}

deletedoc("//pass id")