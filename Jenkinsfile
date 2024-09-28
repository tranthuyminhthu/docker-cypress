pipeline {
    agent none
    stages {
        stage('Parallel Cypress Testing') {
            parallel {
                stage('Test on Agent 1') {
                    agent {
                        label 'cypress-agent'
                    }
                    steps {
                        script {
                            docker.image('cypress/included:12.16.0').inside('-v C:/ProgramData/Jenkins/.jenkins/workspace/Parallel-Cypress-Test:/workspace -w /workspace') {
                                echo 'Running Cypress tests on Agent 1...'
                                bat 'npx cypress run'
                            }
                        }
                    }
                }
            }
        }
    }
}
