pipeline {  
    agent none  
    stages {  
        stage('Parallel Cypress Testing') {  
            parallel {  
                stage('Test on Agent 1') {  
                    agent {  
                        docker {  
                            image 'cypress/included:12.16.0'  
                            // Chuyển đổi tất cả các đường dẫn sang Unix-style  
                            args '--workdir /workspace -v /c/ProgramData/Jenkins/.jenkins/workspace/Parallel-Cypress-Test:/workspace'  
                        }  
                    }  
                    environment {  
                        WORKSPACE = '/workspace'  
                    }  
                    stages {  
                        stage('Checkout Code') {  
                            steps {  
                                checkout scm  
                            }  
                        }  
                        stage('Run Tests') {  
                            steps {  
                                script {  
                                    // Kiểm tra phiên bản Docker  
                                    sh 'docker --version'  
                                    echo "Running Cypress tests on Agent 1..."  
                                    // Chạy npx cypress run  trong Docker container  
                                    sh 'npx cypress run'  
                                }  
                            }  
                        }  
                    }  
                }  
            }  
        }  
    }  
}  