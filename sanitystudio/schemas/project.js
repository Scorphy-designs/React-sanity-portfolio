export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
		},
		{
			name: "date",
			type: "datetime",
		},
		{
			name: "place",
			type: "string",
		},
		{
			name: "description",
			type: "string",
		},
		{
			name: "projectType",
			title: "Project type",
			type: "string",
			options: {
				list: [
					{ value: "personal", title: "Personal" },
					{ value: "Client", title: "Client" },
					{ value: "School", title: "School" },
					{ value: "Freelance", title: "Freelance" },
					{ value: "Office", title: "Office" },
				],
			},
		},
		{
			name: "link",
			type: "url",
		},
		{
			name: "tags",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		},
	],
};
