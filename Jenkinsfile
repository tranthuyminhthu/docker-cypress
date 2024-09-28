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
  
                    // Run npm install to install dependency  
                    bat """  
                    docker run --rm -v ${workspace}:/workspace -w /workspace node:14-alpine sh -c "npm install"  
                    """  
                }  
            }  
        }  
        stage('Run Cypress Tests in Docker') {  
            steps {  
                script {  
                    def workspace = env.WORKSPACE.replace('\\', '/').replace('C:', '/c')  
  
                    // Run Cypress tests in Docker container  
                    bat """  
                    docker run --rm -v ${workspace}:/workspace -w /workspace cypress/included:12.16.0 sh -c "npx cypress run"  
                    """  
                }  
            }  
        }  
    }  
}  