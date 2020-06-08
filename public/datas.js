let datas = [
	{
		topic: "toán 12",
		categories: [
			{
				title: "số phức$$x^2$$",
				id: "so-phuc"
			},
			{
				title: "hàm số",
				id: "so-phuc"
			},
			{
				title: "lũy thừa, logarit",
				id: "so-phuc"
			},
			{
				title: "nguyên hàm - tích phân",
				id: "so-phuc"
			},
			{
				title: "khối đa diện",
				id: "so-phuc"
			},
			{
				title: "mặt nón - mặt trụ - mặt cầu",
				id: "so-phuc"
			},
			{
				title: "hình tọa độ Oxyz",
				id: "so-phuc"
			}
		]
	},
	{
		topic: "toán 11",
		categories: [

		]
	},
	{
		topic: "toán 10",
		categories: [

		]
	}
];


let change_alias = (alias) => {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim();
    return str;
}

datas = datas.map(data => {
	return {
		...data, 
		topicx: change_alias(data.topic),
		categories: data.categories.map(c => {
			return {
				...c,
				titlex: change_alias(c.title)
			}
		})
	}
});

let details = [
	{
		title: "Creating a store",
		top: "let store = createStore(counter)",
		content:`<p>// Dispatches an action; this changes the state</p>
			<p>store.dispatch({ type: 'INCREMENT' })</p>
			<img src="https://latex.codecogs.com/svg.latex?\\int_{3}^{4}(x^2+3x+1)dx" alt="">`,
		bot: "Dispatch actions to change the store’s state."
	},
	{
		title: "DOM Events",
		top: "let store = createStore(counter)",
		content:`<p>// Dispatches an action; this changes the state</p>
			<p>store.dispatch({ type: 'INCREMENT' })</p>`,
		bot: ""
	},
	{
		title: "Transferring props",
		top: "let store = createStore(counter)",
		content:`<p>// Dispatches an action; this changes the state</p>
			<p>store.dispatch({ type: 'INCREMENT' })</p>`,
		bot: "Dispatch actions to change the store’s state."
	}
];

let search = (q, datas) => {
	q = change_alias(q);
	let result 	= datas.map(data => (data.topicx.indexOf(q)!=-1) && data ).filter(d => d);
	let result2 = datas.map(data => (data.topicx.indexOf(q)==-1) && data ).filter(d => d);
	result2.map(data => {
		data.categories.map(c => {
			if(c.titlex.indexOf(q)!=-1){
				if(result.findIndex(r => r.topic == data.topic) == -1){
					result.push({topic: data.topic, categories: [c]})
				}else{
					let index = result.findIndex(r => r.topic == data.topic);
					result[index].categories.push(c)
				}
			}
		})
	})
	return result;
}