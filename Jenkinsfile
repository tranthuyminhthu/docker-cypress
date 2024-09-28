pipeline {  
    agent any  
    stages {  
        stage('Checkout Code') {  
            steps {  
                checkout scm  
            }  
        }  
        stage('Run Cypress Tests in Docker') {  
            steps {  
                script {  
                    // Tìm vị trí hiện tại của thư mục workspace  
                    def workspace = env.WORKSPACE.replace('\\', '/').replace('C:', '/c')  
  
                    bat """  
                    docker run --rm -v ${workspace}:/workspace -w /workspace cypress/included:12.16.0 sh -c '  
                    npx cypress run  
                    '  
                    """  
                }  
            }  
        }  
    }  
} 