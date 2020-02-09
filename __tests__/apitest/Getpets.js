const frisby = require('frisby');

it ('GET pets it should return a status of 200 OK', function () {
  return frisby
    .get('https://petstore.swagger.io/v2/pet/1')
    .expect('status', 200)
	.expect('header', 'Content-Type', 'application/json');
});

 it('Post pets by Id', function (doneFn) {
 
    return frisby.post('https://petstore.swagger.io/v2/pet/1', {
		headers: {			
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        name: 'dog',
        status: 'pending'
      }
    })
    .expect('status', 200)
    .done(doneFn);
 });
 
 it('Get Pets by pets status', function () {    
    return frisby
	.get('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
    .expect('status', 200)
 });
 
 
  it('Post pets using json', function () {    
   return frisby
	  	.post('https://petstore.swagger.io/v2/pet', 
			{
			"id": 11,
			"category": {
				"id": 11,
				"name": "Added pets"
			},
			"name": "doggie",
			"photoUrls": [
				"string"
			],
			"tags": [
				{
				"id": 11,
				"name": "string"
				}
			],
			"status": "available"
			}, {json: true})	
    	.expect('status', 200)
 });


 it('Put pets using json', function () {    
	return frisby
		   .put('https://petstore.swagger.io/v2/pet', 
			 {
			 "id": 11,
			 "category": {
				 "id": 1,
				 "name": "Updated Test"
			 },
			 "name": "doggie",
			 "photoUrls": [
				 "string"
			 ],
			 "tags": [
				 {
				 "id": 11,
				 "name": "string"
				 }
			 ],
			 "status": "available"
			 }, {json: true})		
		 .expect('status', 200)
  });

  it('Delete pets using pets Id', function () {    
    return frisby
	.del('https://petstore.swagger.io/v2/pet/11')
    .expect('status', 200)
 });