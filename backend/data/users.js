import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Asuka Langley',
		email: 'admin1@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Rei Ayanami',
		email: 'admin2@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
