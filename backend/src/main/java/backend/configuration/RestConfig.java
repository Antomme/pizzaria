package backend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

/**
 * Configuration class for customizing Spring Data REST behavior.
 *
 * <p>
 * This class implements {@link RepositoryRestConfigurer} to modify
 * the default configuration of Spring Data REST.
 * </p>
 *
 * <p>
 * The purpose of this configuration is to enable a frontend application
 * (e.g., a locally running Vite/React development server on port 5173)
 * to access the REST API. Without this configuration, the browser would
 * block cross-origin requests due to the same-origin policy.
 * </p>
 */

@Configuration
public class RestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(
            RepositoryRestConfiguration config,
            CorsRegistry cors) {

        cors.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*");
    }
}

