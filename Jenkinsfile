pipeline {
    agent none
    stages {
        stage('Parallel Cypress Testing') {
            parallel {
                stage('Test on Agent 1') {
                    agent {
                        docker {
                            image 'cypress/included:12.16.0'
                            label 'cypress-agent'
                            args '-v C:/ProgramData/Jenkins/.jenkins/workspace/Parallel-Cypress-Test/:/workspace'
                        }
                    }
                    steps {
                        echo 'Running Cypress tests on Agent 1...'
                        bat 'npx cypress run'
                    }
                }
            }
        }
    }
}