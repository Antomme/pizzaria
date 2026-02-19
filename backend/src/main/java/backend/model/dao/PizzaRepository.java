package backend.model.dao;

import backend.model.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Needed Interface to use JpaRepository with Pizza-Entity.
 */
public interface PizzaRepository extends JpaRepository<Pizza, Integer> {

}
