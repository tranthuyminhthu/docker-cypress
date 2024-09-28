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
                            args '-v /root/.cache/Cypress:/root/.cache/Cypress'
                        }
                    }
                    steps {
                        echo 'Running Cypress tests on Agent 1...'
                        sh 'npx cypress run'
                    }
                }
                stage('Test on Agent 2') {
                    agent {
                        docker {
                            image 'cypress/included:12.16.0'
                            label 'cypress-agent'
                            args '-v /root/.cache/Cypress:/root/.cache/Cypress'
                        }
                    }
                    steps {
                        echo 'Running Cypress tests on Agent 2...'
                        sh 'npx cypress run'
                    }
                }
                stage('Test on Agent 3') {
                    agent {
                        docker {
                            image 'cypress/included:12.16.0'
                            label 'cypress-agent'
                            args '-v /root/.cache/Cypress:/root/.cache/Cypress'
                        }
                    }
                    steps {
                        echo 'Running Cypress tests on Agent 3...'
                        sh 'npx cypress run'
                    }
                }
            }
        }
    }
}