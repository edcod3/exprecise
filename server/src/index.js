const { ApolloServer } = require("apollo-server");

//MongoDB Initialization
const mongo = require("./mongo");
//Type Definition
const typeDefs = require("./typeDefs");

//Data
let workouts = [
	{
		id: "workout-0",
		title: "push-ups",
		desc: "Do some push-ups",
		reps: 30,
		kg: null
	},
	{
		id: "workout-1",
		title: "pull-ups",
		desc: "Do some pull-ups",
		reps: 21,
		kg: null
	}
];
let woID = workouts.length;

const resolvers = {
	Query: {
		workouts: () => workouts
	},
	Mutation: {
		add: (parent, args) => {
			const newWo = {
				id: `workout-${woID++}`,
				title: args.title,
				desc: args.desc,
				reps: Number(args.reps) || null,
				weight: Number(args.weight) || null
			};
			workouts.push(newWo);
			return newWo;
		},
		delete: (parent, args) => {
			for (let i = 0; i < workouts.length; i++) {
				if (workouts[i].id == args.id) {
					const workout_copy = workouts[i];
					workouts.splice(i, 1);
					return workout_copy;
				} else {
					continue;
				}
			}
		},
		edit: (parent, args) => {
			for (let i = 0; i < workouts.length; i++) {
				if (workouts[i].id == args.original_id) {
					const new_workout = {
						id: args.original_id,
						title: args.title || workouts[i].title,
						desc: args.desc || workouts[i].desc,
						reps: args.reps,
						weight: args.weight
					};
					workouts.splice(i, 1, new_workout);
					return new_workout;
				} else {
					continue;
				}
			}
		}
	},
	Workout: {
		id: (parent) => parent.id,
		title: (parent) => parent.title,
		desc: (parent) => parent.desc,
		reps: (parent) => parent.reps,
		weight: (parent) => parent.weight
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
