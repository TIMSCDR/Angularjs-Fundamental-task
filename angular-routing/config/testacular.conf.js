basePath = '../../angular-routing';

files = [
JASMINE,
JASMINE ADAPTER,
'../test/lib/jquery.js',
'../js/*.js',
'../test/lib/angular/angular-mocks.js',
'../test/lib/sinon-1.17.2.js'
];

autoWatch = true;
browsers=['Chrome'];

junitReporter = {
	outputFile: 'test_out/unit.xml',
	suite: 'unit'
}
