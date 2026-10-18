pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Getting source code'
            }
        }

        stage('Build') {
            steps {
                echo 'Building static website'
                bat 'if not exist dist mkdir dist'
                bat 'copy index.html dist\\index.html'
                bat 'copy style.css dist\\style.css'
                bat 'copy script.js dist\\script.js'
            }
        }

        stage('Test') {
            steps {
                bat 'if exist dist\\index.html (echo HTML file exists) else (exit /b 1)'
                bat 'if exist dist\\style.css (echo CSS file exists) else (exit /b 1)'
                bat 'if exist dist\\script.js (echo JavaScript file exists) else (exit /b 1)'
            }
        }

        stage('Quality Check') {
            steps {
                bat 'findstr /C:"<html" index.html'
                bat 'findstr /C:"<script" index.html'
                echo 'Basic quality checks completed'
            }
        }

        stage('Package') {
            steps {
                powershell 'Compress-Archive -Path dist\\* -DestinationPath website.zip -Force'
                archiveArtifacts artifacts: 'website.zip', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                bat 'if not exist deploy mkdir deploy'
                bat 'copy website.zip deploy\\website.zip'
                echo 'Deployment package copied to deploy directory'
            }
        }
    }
}
