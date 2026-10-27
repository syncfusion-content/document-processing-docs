System.config({
	transpiler: 'ts',
	typescriptOptions: {
		compilerOptions: {
			target: 'es2020',
			module: 'systemjs',
			moduleResolution: 'node',
			sourceMap: true,
			experimentalDecorators: true,
			lib: ['es2020', 'dom'],
			noImplicitAny: false
		}
	},
	meta: {
		'typescript': {
			'exports': 'ts'
		}
	},
	paths: {
		'npm:': 'https://cdn.jsdelivr.net/npm/',
		'@syncfusion/': 'https://cdn.jsdelivr.net/npm/@syncfusion/'
	},
	map: {
		'app': 'app.js',
		'ts': 'npm:typescript@5/lib/typescript.js',
		'tslib': 'npm:tslib@2/tslib.js',
		'@syncfusion/ej2-xlsx': 'npm:@syncfusion/ej2-xlsx/index.js'
	},
	packages: {
		'app': {
			defaultExtension: 'ts'
		},
		'npm:@syncfusion/ej2-xlsx': {
			defaultExtension: 'js'
		}
	}
});

System.import('app.js').catch(console.error.bind(console));
