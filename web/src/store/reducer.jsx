let reducer=(state=defaultState,action)=>{
	let {type,payload} =action;
	switch(type){
		case 'showSolve':
		return Object.assign({},state,{
			solveDate:true
		});
		break;
		case "hideSolve":
		return Object.assign({},state,{
			solveDate:false
		})
		break;
		case "showCase":
		return Object.assign({},state,{
			caseDate:true
		})
		break;
		case "hideCase":
		return Object.assign({},state,{
			caseDate:false
		})
		break;
		case "showNews":
		return Object.assign({},state,{
			newsDate:true
		})
		break;
		case "hideNews":
		return Object.assign({},state,{
			newsDate:false
		})
		break;
		case 'solveDate':
		return Object.assign({},state,{
			solve:payload
		});
		break;
		case 'newsDate':
		return Object.assign({},state,{
			news:payload
		});
		break;
		case 'caseDate':
		return Object.assign({},state,{
			case:payload
		});
		break;
		default:
		return state
	}
}
export default reducer;