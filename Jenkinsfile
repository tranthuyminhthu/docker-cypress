pipeline {        
    agent any        
    stages {        
        stage('Checkout Code') {        
            steps {        
                checkout scm        
            }        
        }        
              
        stage('Install Dependencies') {      
            steps {          
                script {  
                    def workspace = env.WORKSPACE.replace('\\', '/').replace('C:', '/c')  
                      
                    // Chạy npm install với quyền root  
                    bat """          
                    docker run --rm -v ${workspace}:/workspace -w /workspace --user 0 node:14-alpine /bin/sh -c "npm install"  
                    """          
                }          
            }      
        }    
      
        stage('Run Cypress Tests in Docker') {          
            steps {          
                script {          
                    def workspace = env.WORKSPACE.replace('\\', '/').replace('C:', '/c')          
                          
                    // Chạy Cypress tests bên trong Docker container          
                    bat """          
                    docker run --rm -v ${workspace}:/workspace -w /workspace --user 0 cypress/included:12.16.0 /bin/sh -c "npx cypress run"  
                    """          
                }          
            }          
        }      
    }        
}