function getListStudent() {
	return [
		{id:1, firstName: 'Guillaume', location:'San Francisco'},
		{id:2, firstName:'James', location: 'Columbia'},
		{id:2, firstName: 'Serena', location: 'San Francisco'}
	];
}

const students = getListStudents();
console.log(students);
