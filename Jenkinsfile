pipeline {  
    agent none  
    stages {  
        stage('Parallel Cypress Testing') {  
            parallel {  
                stage('Test on Agent 1') {  
                    agent {  
                        // Sử dụng đường dẫn Unix-style cho Docker trên Windows  
                        docker {  
                            image 'cypress/included:12.16.0'  
                            args '--workdir /workspace -v /c/ProgramData/Jenkins/.jenkins/workspace/Parallel-Cypress-Test:/workspace'  
                        }  
                    }  
                    environment {  
                        // Đảm bảo đường dẫn Unix-style  
                        WORKSPACE = '/c/ProgramData/Jenkins/.jenkins/workspace/Parallel-Cypress-Test'  
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
                                    // Đảm bảo Docker đang chạy  
                                    bat "docker --version"  
                                    bat "echo Running Cypress tests on Agent 1..."  
                                    // Chạy npx cypress run ngay trong script block  
                                    bat "docker run --rm -v /c/ProgramData/Jenkins/.jenkins/workspace/Parallel-Cypress-Test:/workspace cypress/included:12.16.0 npx cypress run"  
                                }  
                            }  
                        }  
                    }  
                }  
            }  
        }  
    }  
}  