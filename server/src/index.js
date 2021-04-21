const { ApolloServer } = require("apollo-server");

//Type Definition
const typeDefs = require("./typeDefs");

//MongoDB & Schema Initialization
const mongoDB = require("./mongo");
const Workout = mongoDB.WorkoutModel;

// Test Data (Hardcoded)
/*let workouts = [
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
*/

const resolvers = {
	Query: {
		workouts: async () => await Workout.find({})
	},
	Mutation: {
		add: async (_, args) => {
			const saveWorkout = new Workout({
				title: args.title,
				desc: args.desc,
				reps: Number(args.reps) || null,
				weight: Number(args.weight) || null
			});
			return await saveWorkout.save();
		},
		delete: async (_, args) => await Workout.findByIdAndDelete(args.id),
		edit: async (_, args) =>
			await Workout.findByIdAndUpdate(args.original_id, {
				title: args.title,
				desc: args.desc,
				reps: args.reps,
				weight: args.weight
			})
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
