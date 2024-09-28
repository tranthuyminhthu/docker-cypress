pipeline {  
    agent none  
    stages {  
        stage('Parallel Cypress Testing') {  
            parallel {  
                stage('Test on Agent 1') {  
                    agent {  
                        docker {  
                            image 'cypress/included:12.16.0'  
                            args '--workdir /workspace -v C:/ProgramData/Jenkins/.jenkins/workspace/Parallel-Cypress-Test:/workspace'  
                        }  
                    }  
                    environment {  
                        WORKSPACE = 'C:/ProgramData/Jenkins/.jenkins/workspace/Parallel-Cypress-Test'  
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
                                    bat "docker --version"  
                                    bat "echo Running Cypress tests on Agent 1..."  
                                    bat "npx cypress run"  
                                }  
                            }  
                        }  
                    }  
                }  
            }  
        }  
    }  
}  