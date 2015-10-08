var config = 
	{
		'db':{
			 'connectionString': process.env.DATABASE_URL || '',					
		 },		
		 
	  	 'statusCodes':{
			 'success'			: 1000,			
			 'failure'			: 1001,			
			 'fieldRequired'	: 1002,			
			 'invalidRequest'	: 1003,
			 'unavailable'		: 1004,
			 'inprogress'		: 1005,
			 
						 
			 
			 'db':{
				'ConnectionError': 3001,
				'QueryError'	 : 3002	
			  }
		 }
	};
	
module.exports = config;
